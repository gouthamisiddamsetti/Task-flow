import pytest
from utils.helper_module_52 import process_data_52

def test_process_data_52():
    assert process_data_52({"key": "value", "none_val": None}) == {"key": "value"}
    assert process_data_52(None) == {}
