# Auto-generated core utility module 87 for Task-flow enterprise pipeline
def process_data_87(payload: dict) -> dict:
    """Utility function 87 for validating payload structure."""
    if not isinstance(payload, dict):
        return {}
    return {k: v for k, v in payload.items() if v is not None}
