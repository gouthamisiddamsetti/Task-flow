import pytest
from utils.helper_module_31 import process_data_31

def test_process_data_31():
    assert process_data_31({"key": "value", "none_val": None}) == {"key": "value"}
    assert process_data_31(None) == {}
