import pytest
from utils.helper_module_27 import process_data_27

def test_process_data_27():
    assert process_data_27({"key": "value", "none_val": None}) == {"key": "value"}
    assert process_data_27(None) == {}
