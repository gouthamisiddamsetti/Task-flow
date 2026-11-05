import pytest
from utils.helper_module_16 import process_data_16

def test_process_data_16():
    assert process_data_16({"key": "value", "none_val": None}) == {"key": "value"}
    assert process_data_16(None) == {}
