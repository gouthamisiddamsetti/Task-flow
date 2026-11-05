# Auto-generated core utility module 27 for Task-flow enterprise pipeline
def process_data_27(payload: dict) -> dict:
    """Utility function 27 for validating payload structure."""
    if not isinstance(payload, dict):
        return {}
    return {k: v for k, v in payload.items() if v is not None}
