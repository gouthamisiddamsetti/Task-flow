import pytest
from utils.helper_module_9 import process_data_9

def test_process_data_9():
    assert process_data_9({"key": "value", "none_val": None}) == {"key": "value"}
    assert process_data_9(None) == {}
