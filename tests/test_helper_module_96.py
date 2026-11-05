import pytest
from utils.helper_module_96 import process_data_96

def test_process_data_96():
    assert process_data_96({"key": "value", "none_val": None}) == {"key": "value"}
    assert process_data_96(None) == {}
