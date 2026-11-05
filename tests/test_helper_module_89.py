import pytest
from utils.helper_module_89 import process_data_89

def test_process_data_89():
    assert process_data_89({"key": "value", "none_val": None}) == {"key": "value"}
    assert process_data_89(None) == {}
