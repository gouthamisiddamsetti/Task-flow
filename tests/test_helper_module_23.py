import pytest
from utils.helper_module_23 import process_data_23

def test_process_data_23():
    assert process_data_23({"key": "value", "none_val": None}) == {"key": "value"}
    assert process_data_23(None) == {}
