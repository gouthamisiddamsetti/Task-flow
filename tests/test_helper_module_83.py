import pytest
from utils.helper_module_83 import process_data_83

def test_process_data_83():
    assert process_data_83({"key": "value", "none_val": None}) == {"key": "value"}
    assert process_data_83(None) == {}
