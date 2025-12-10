import json
import os
import psycopg2
from typing import Dict, Any

def handler(event: Dict[str, Any], context: Any) -> Dict[str, Any]:
    '''
    Обрабатывает RSVP запросы от гостей свадьбы
    Args: event - HTTP запрос с данными гостя
          context - контекст выполнения функции
    Returns: HTTP ответ с результатом сохранения
    '''
    method: str = event.get('httpMethod', 'GET')
    
    if method == 'OPTIONS':
        return {
            'statusCode': 200,
            'headers': {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
                'Access-Control-Allow-Headers': 'Content-Type',
                'Access-Control-Max-Age': '86400'
            },
            'body': '',
            'isBase64Encoded': False
        }
    
    if method == 'POST':
        try:
            body_data = json.loads(event.get('body', '{}'))
            
            name = body_data.get('name', '').strip()
            email = body_data.get('email', '').strip()
            guest_count = int(body_data.get('guestCount', 1))
            attending = body_data.get('attending')
            
            if not name or not email or attending is None:
                return {
                    'statusCode': 400,
                    'headers': {
                        'Content-Type': 'application/json',
                        'Access-Control-Allow-Origin': '*'
                    },
                    'body': json.dumps({'error': 'Заполните все обязательные поля'}),
                    'isBase64Encoded': False
                }
            
            conn = psycopg2.connect(os.environ['DATABASE_URL'])
            cur = conn.cursor()
            
            cur.execute(
                "INSERT INTO guests (name, email, guest_count, attending) VALUES (%s, %s, %s, %s) RETURNING id",
                (name, email, guest_count, attending)
            )
            
            guest_id = cur.fetchone()[0]
            conn.commit()
            
            cur.close()
            conn.close()
            
            return {
                'statusCode': 200,
                'headers': {
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin': '*'
                },
                'body': json.dumps({
                    'success': True,
                    'message': 'Спасибо за ответ!',
                    'guestId': guest_id
                }),
                'isBase64Encoded': False
            }
            
        except Exception as e:
            return {
                'statusCode': 500,
                'headers': {
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin': '*'
                },
                'body': json.dumps({'error': f'Ошибка сохранения: {str(e)}'}),
                'isBase64Encoded': False
            }
    
    if method == 'GET':
        try:
            conn = psycopg2.connect(os.environ['DATABASE_URL'])
            cur = conn.cursor()
            
            cur.execute(
                "SELECT COUNT(*) as total, SUM(CASE WHEN attending THEN guest_count ELSE 0 END) as attending_count FROM guests"
            )
            
            row = cur.fetchone()
            total_responses = row[0] or 0
            attending_count = row[1] or 0
            
            cur.close()
            conn.close()
            
            return {
                'statusCode': 200,
                'headers': {
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin': '*'
                },
                'body': json.dumps({
                    'totalResponses': total_responses,
                    'attendingCount': attending_count
                }),
                'isBase64Encoded': False
            }
            
        except Exception as e:
            return {
                'statusCode': 500,
                'headers': {
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin': '*'
                },
                'body': json.dumps({'error': f'Ошибка получения данных: {str(e)}'}),
                'isBase64Encoded': False
            }
    
    return {
        'statusCode': 405,
        'headers': {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*'
        },
        'body': json.dumps({'error': 'Метод не поддерживается'}),
        'isBase64Encoded': False
    }
