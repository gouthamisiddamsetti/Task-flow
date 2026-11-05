import pytest
from utils.helper_module_26 import process_data_26

def test_process_data_26():
    assert process_data_26({"key": "value", "none_val": None}) == {"key": "value"}
    assert process_data_26(None) == {}
