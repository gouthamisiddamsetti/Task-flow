import pytest
from utils.helper_module_80 import process_data_80

def test_process_data_80():
    assert process_data_80({"key": "value", "none_val": None}) == {"key": "value"}
    assert process_data_80(None) == {}
