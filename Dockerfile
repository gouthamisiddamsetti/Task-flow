# Multi-stage or slim python container for Taskflow Pro
FROM python:3.11-slim

# Prevent Python from writing .pyc files & enable unbuffered stdout/stderr
ENV PYTHONDONTWRITEBYTECODE=1 \
    PYTHONUNBUFFERED=1 \
    DOCKER_CONTAINER=1 \
    FLASK_RUN_HOST=0.0.0.0 \
    FLASK_RUN_PORT=5000

WORKDIR /app

# Install system dependencies required for build tools and curl healthcheck
RUN apt-get update && apt-get install -y --no-install-recommends \
    build-essential \
    curl \
    && rm -rf /var/lib/apt/lists/*

# Install Python dependencies
COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

# Copy application source code
COPY . .

# Ensure upload and data persistence directories exist
RUN mkdir -p static/uploads/proofs /app/data

# Expose standard application port
EXPOSE 5000

# Health check
HEALTHCHECK --interval=30s --timeout=10s --start-period=5s --retries=3 \
  CMD curl -f http://localhost:5000/login || exit 1

# Launch application via run.py with SocketIO support
CMD ["python", "run.py"]
