import pytest
from utils.helper_module_45 import process_data_45

def test_process_data_45():
    assert process_data_45({"key": "value", "none_val": None}) == {"key": "value"}
    assert process_data_45(None) == {}
