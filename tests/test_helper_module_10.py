import pytest
from utils.helper_module_10 import process_data_10

def test_process_data_10():
    assert process_data_10({"key": "value", "none_val": None}) == {"key": "value"}
    assert process_data_10(None) == {}
