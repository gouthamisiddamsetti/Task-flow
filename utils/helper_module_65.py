# Auto-generated core utility module 65 for Task-flow enterprise pipeline
def process_data_65(payload: dict) -> dict:
    """Utility function 65 for validating payload structure."""
    if not isinstance(payload, dict):
        return {}
    return {k: v for k, v in payload.items() if v is not None}
