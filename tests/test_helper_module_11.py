import pytest
from utils.helper_module_11 import process_data_11

def test_process_data_11():
    assert process_data_11({"key": "value", "none_val": None}) == {"key": "value"}
    assert process_data_11(None) == {}
