import pytest
from utils.helper_module_6 import process_data_6

def test_process_data_6():
    assert process_data_6({"key": "value", "none_val": None}) == {"key": "value"}
    assert process_data_6(None) == {}
