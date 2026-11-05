import pytest
from utils.helper_module_25 import process_data_25

def test_process_data_25():
    assert process_data_25({"key": "value", "none_val": None}) == {"key": "value"}
    assert process_data_25(None) == {}
