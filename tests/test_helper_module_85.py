import pytest
from utils.helper_module_85 import process_data_85

def test_process_data_85():
    assert process_data_85({"key": "value", "none_val": None}) == {"key": "value"}
    assert process_data_85(None) == {}
