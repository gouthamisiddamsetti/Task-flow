# Auto-generated core utility module 20 for Task-flow enterprise pipeline
def process_data_20(payload: dict) -> dict:
    """Utility function 20 for validating payload structure."""
    if not isinstance(payload, dict):
        return {}
    return {k: v for k, v in payload.items() if v is not None}
