import re
from typing import Optional

def sanitize_string(input_str: Optional[str], max_length: Optional[int] = None) -> str:
    if not input_str or not isinstance(input_str, str):
        return ""
    cleaned = re.sub(r"[\x00-\x08\x0B\x0C\x0E-\x1F\x7F]", "", input_str).strip()
    return cleaned[:max_length] if max_length and max_length > 0 else cleaned

def normalize_tags(tags_input: Optional[str]) -> list[str]:
    if not tags_input or not isinstance(tags_input, str):
        return []
    return [sanitize_string(t).lower() for t in tags_input.split(",") if sanitize_string(t)]
