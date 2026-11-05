import pytest
from utils.helper_module_30 import process_data_30

def test_process_data_30():
    assert process_data_30({"key": "value", "none_val": None}) == {"key": "value"}
    assert process_data_30(None) == {}
