import pytest
from utils.helper_module_84 import process_data_84

def test_process_data_84():
    assert process_data_84({"key": "value", "none_val": None}) == {"key": "value"}
    assert process_data_84(None) == {}
