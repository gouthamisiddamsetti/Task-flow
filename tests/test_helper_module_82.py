import pytest
from utils.helper_module_82 import process_data_82

def test_process_data_82():
    assert process_data_82({"key": "value", "none_val": None}) == {"key": "value"}
    assert process_data_82(None) == {}
