import pytest
from utils.helper_module_32 import process_data_32

def test_process_data_32():
    assert process_data_32({"key": "value", "none_val": None}) == {"key": "value"}
    assert process_data_32(None) == {}
