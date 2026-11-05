import pytest
from utils.helper_module_57 import process_data_57

def test_process_data_57():
    assert process_data_57({"key": "value", "none_val": None}) == {"key": "value"}
    assert process_data_57(None) == {}
