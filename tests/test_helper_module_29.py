import pytest
from utils.helper_module_29 import process_data_29

def test_process_data_29():
    assert process_data_29({"key": "value", "none_val": None}) == {"key": "value"}
    assert process_data_29(None) == {}
