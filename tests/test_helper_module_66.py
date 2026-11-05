import pytest
from utils.helper_module_66 import process_data_66

def test_process_data_66():
    assert process_data_66({"key": "value", "none_val": None}) == {"key": "value"}
    assert process_data_66(None) == {}
