import pytest
from utils.helper_module_69 import process_data_69

def test_process_data_69():
    assert process_data_69({"key": "value", "none_val": None}) == {"key": "value"}
    assert process_data_69(None) == {}
