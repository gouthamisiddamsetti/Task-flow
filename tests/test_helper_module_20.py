import pytest
from utils.helper_module_20 import process_data_20

def test_process_data_20():
    assert process_data_20({"key": "value", "none_val": None}) == {"key": "value"}
    assert process_data_20(None) == {}
