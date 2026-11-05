import pytest
from utils.helper_module_8 import process_data_8

def test_process_data_8():
    assert process_data_8({"key": "value", "none_val": None}) == {"key": "value"}
    assert process_data_8(None) == {}
