CREATE TABLE IF NOT EXISTS guests (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    guest_count INTEGER NOT NULL DEFAULT 1,
    attending BOOLEAN NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX idx_guests_email ON guests(email);
CREATE INDEX idx_guests_created_at ON guests(created_at DESC);