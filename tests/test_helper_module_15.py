import pytest
from utils.helper_module_15 import process_data_15

def test_process_data_15():
    assert process_data_15({"key": "value", "none_val": None}) == {"key": "value"}
    assert process_data_15(None) == {}
