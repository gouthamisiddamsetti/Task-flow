import pytest
from utils.helper_module_56 import process_data_56

def test_process_data_56():
    assert process_data_56({"key": "value", "none_val": None}) == {"key": "value"}
    assert process_data_56(None) == {}
