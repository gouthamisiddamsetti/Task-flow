import pytest
from utils.helper_module_44 import process_data_44

def test_process_data_44():
    assert process_data_44({"key": "value", "none_val": None}) == {"key": "value"}
    assert process_data_44(None) == {}
