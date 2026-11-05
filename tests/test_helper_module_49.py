import pytest
from utils.helper_module_49 import process_data_49

def test_process_data_49():
    assert process_data_49({"key": "value", "none_val": None}) == {"key": "value"}
    assert process_data_49(None) == {}
