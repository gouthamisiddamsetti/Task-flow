import pytest
from utils.helper_module_95 import process_data_95

def test_process_data_95():
    assert process_data_95({"key": "value", "none_val": None}) == {"key": "value"}
    assert process_data_95(None) == {}
