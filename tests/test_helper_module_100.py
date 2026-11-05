import pytest
from utils.helper_module_100 import process_data_100

def test_process_data_100():
    assert process_data_100({"key": "value", "none_val": None}) == {"key": "value"}
    assert process_data_100(None) == {}
