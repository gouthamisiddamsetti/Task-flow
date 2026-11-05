import pytest
from utils.helper_module_64 import process_data_64

def test_process_data_64():
    assert process_data_64({"key": "value", "none_val": None}) == {"key": "value"}
    assert process_data_64(None) == {}
