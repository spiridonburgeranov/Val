# Базовый образ
FROM python:3.12-slim

# Устанавливаем рабочую директорию
WORKDIR /app

# Копируем файлы для зависимостей
COPY pyproject.toml poetry.lock* /app/

# Устанавливаем Poetry и зависимости
RUN pip install poetry \
    && poetry config virtualenvs.create false \
    && poetry install  --no-root
# Копируем весь код проекта
COPY . /app

# Экспорт порта
EXPOSE 8000

# Запуск приложения
CMD ["uvicorn", "src.main:app", "--host", "0.0.0.0", "--port", "8000", "--log-level", "info"]

