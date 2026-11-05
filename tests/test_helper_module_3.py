import pytest
from utils.helper_module_3 import process_data_3

def test_process_data_3():
    assert process_data_3({"key": "value", "none_val": None}) == {"key": "value"}
    assert process_data_3(None) == {}
