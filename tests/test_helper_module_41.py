import pytest
from utils.helper_module_41 import process_data_41

def test_process_data_41():
    assert process_data_41({"key": "value", "none_val": None}) == {"key": "value"}
    assert process_data_41(None) == {}
