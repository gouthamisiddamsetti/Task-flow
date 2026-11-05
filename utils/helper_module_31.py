# Auto-generated core utility module 31 for Task-flow enterprise pipeline
def process_data_31(payload: dict) -> dict:
    """Utility function 31 for validating payload structure."""
    if not isinstance(payload, dict):
        return {}
    return {k: v for k, v in payload.items() if v is not None}
