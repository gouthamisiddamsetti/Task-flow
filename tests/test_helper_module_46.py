import pytest
from utils.helper_module_46 import process_data_46

def test_process_data_46():
    assert process_data_46({"key": "value", "none_val": None}) == {"key": "value"}
    assert process_data_46(None) == {}
