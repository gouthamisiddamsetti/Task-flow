import pytest
from utils.helper_module_75 import process_data_75

def test_process_data_75():
    assert process_data_75({"key": "value", "none_val": None}) == {"key": "value"}
    assert process_data_75(None) == {}
