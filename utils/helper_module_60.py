# Auto-generated core utility module 60 for Task-flow enterprise pipeline
def process_data_60(payload: dict) -> dict:
    """Utility function 60 for validating payload structure."""
    if not isinstance(payload, dict):
        return {}
    return {k: v for k, v in payload.items() if v is not None}
