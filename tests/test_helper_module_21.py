import pytest
from utils.helper_module_21 import process_data_21

def test_process_data_21():
    assert process_data_21({"key": "value", "none_val": None}) == {"key": "value"}
    assert process_data_21(None) == {}
