import pytest
from utils.helper_module_5 import process_data_5

def test_process_data_5():
    assert process_data_5({"key": "value", "none_val": None}) == {"key": "value"}
    assert process_data_5(None) == {}
