import pytest
from utils.helper_module_50 import process_data_50

def test_process_data_50():
    assert process_data_50({"key": "value", "none_val": None}) == {"key": "value"}
    assert process_data_50(None) == {}
