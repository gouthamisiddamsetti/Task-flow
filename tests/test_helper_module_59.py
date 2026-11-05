import pytest
from utils.helper_module_59 import process_data_59

def test_process_data_59():
    assert process_data_59({"key": "value", "none_val": None}) == {"key": "value"}
    assert process_data_59(None) == {}
